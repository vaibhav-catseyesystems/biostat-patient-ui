import React, { useEffect, useRef, useState } from 'react';

const VideoAnalysisTab = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [videoStream, setVideoStream] = useState(null);
    const videoRef = useRef(null);

    const startRecording = async () => {
        try {
            setIsRecording(true)
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });
            setVideoStream(stream);
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.error('Error accessing the webcam:', err);
        }
    };

    const stopRecording = () => {
        if (videoStream) {
            videoStream.getTracks().forEach((track) => track.stop());
            setVideoStream(null);
            setIsRecording(false);

            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        } else {
            console.log("No active stream found.");
        }
    };


    useEffect(() => {
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject;
                const tracks = stream.getTracks();
                tracks.forEach((track) => track.stop());
            }
        };
    }, []);


    return (
        <article className="bg-[#FFF] rounded-[13px] p-8 max-sm:p-4 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col items-center gap-[16px]">
                <div className="w-full max-w-[640px] h-[360px] max-sm:h-[240px] bg-[#F8F9FA] rounded-[8px] flex items-center justify-center overflow-hidden">
                    {isRecording ? (
                        <video
                            ref={videoRef}
                            autoPlay
                            // playsInline
                            muted
                            className="w-full h-full object-cover rounded-[8px]"
                        />
                    ) : (
                        <div className="text-[#64748B] text-center p-4">
                            Camera preview will appear here
                        </div>
                    )}
                </div>

                <div className="flex gap-[16px] max-sm:flex-col max-sm:w-full">
                    {!isRecording ? (
                        <button
                            onClick={startRecording}
                            className="px-6 py-3 bg-[#4318D1] text-[#FFF] rounded-[8px] max-sm:w-full"
                        >
                            Start Recording
                        </button>
                    ) : (
                        <button
                            onClick={stopRecording}
                            className="px-6 py-3 bg-[#DC2626] text-[#FFF] rounded-[8px] max-sm:w-full"
                        >
                            Stop Recording
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
};

export default VideoAnalysisTab;
