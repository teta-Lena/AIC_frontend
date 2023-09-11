import Player from '@/components/music/player';
import { useAuthContext } from '@/contexts/AuthContext';
import { useStreamContext } from '@/contexts/StreamContext';
import MainLayout from '@/layouts/MainLayout';
import { socket } from '@/socket';
import Peer from 'peerjs';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const Live = () => {


    const { streamId } = useParams();
    const { user, authenticated } = useAuthContext()
    const { activeStream } = useStreamContext()

    const webcamRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peer = new Peer();
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    const getUserMedia = async () => {

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            if (webcamRef.current) {
                webcamRef.current.src = stream;
            }

            // Connect to the PeerJS server (your NestJS backend)
            const myPeer = new Peer();
            myPeer.on('open', (peerId) => {
                // Emit the peerId to your signaling server (WebSocket server)
                // so that others can connect to this peer
                socket.emit('join-room', { roomId: streamId, peerId });
            });

            // Handle incoming calls from other peers
            myPeer.on('call', (call) => {
                call.answer(stream);
                call.on('stream', (remoteStream) => {
                    // Display the remote stream from other peers
                    if (webcamRef.current) {
                        webcamRef.current.src = remoteStream;
                    }
                });
            });
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const getRemoteStream = async () => {

        try {
            // Connect to the PeerJS server (your NestJS backend)
            const myPeer = new Peer();
            myPeer.on('open', (peerId) => {
                // Emit the peerId to your signaling server (WebSocket server)
                // so that the streamer can connect to this peer
                socket.emit('join-room', { roomId: streamId, peerId });
            });

            // Handle incoming calls from the streamer
            myPeer.on('call', (call) => {
                call.answer(); // Answer the call
                call.on('stream', (remoteStream) => {
                    // Display the stream from the streamer
                    if (remoteVideoRef.current) {
                        remoteVideoRef.current.src = remoteStream;
                    }
                });
            });
        } catch (error) {
            console.error('Error connecting to streamer:', error);
        }
    };

    const sendMessage = (e) => {

        e.preventDefault()
        console.log("sending message")
        socket.emit("message", { room: streamId, message })
        setMessage("")
    }

    useEffect(() => {

        if (user?.role === "ARTIST") getUserMedia()
        else getRemoteStream()

        socket.on("user_joined_chat", (data) => {
            console.log(`${data} has joined the chat`)
        })

        socket.on("new_message", (data) => {
            console.log("receiving message")
            setMessages(messages => [...messages, data])
        })
    }, []);

    useEffect(() => {
        if (!authenticated) return
        socket.emit("join_chat_room", { roomId: streamId, userId: user.id })
    }, [user.id])

    return (
        <MainLayout>
            <div className='w-full flex'>
                <div className='w-7/12'>
                    <video playsInline autoPlay controls ref={webcamRef} />
                    <video playsInline autoPlay controls ref={remoteVideoRef} />
                </div>
                <div className='w-5/12'></div>
            </div>
        </MainLayout>
    )
}

export default Live