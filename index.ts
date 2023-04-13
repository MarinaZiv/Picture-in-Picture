const videoElement = document.querySelector('#video') as HTMLVideoElement;
const button = document.querySelector("#button") as HTMLButtonElement;

// Select media stream, pass to video element, then play 
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.error(error);
    }
}
button.addEventListener('click', async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});
selectMediaStream();
