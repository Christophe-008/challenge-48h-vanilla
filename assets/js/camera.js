export const camera = (() => {
    if (document.querySelector(".page-event")) {
        const video = document.getElementById("video");
        const canvas = document.getElementById("canvas");
        const photo = document.getElementById("photo");
        const captureButton = document.getElementById("picture");

        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.error("Erreur d'accès à la caméra :", err);
            });

        captureButton.addEventListener("click", () => {
            const context = canvas.getContext("2d");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            const dataURL = canvas.toDataURL("image/png");

            photo.src = dataURL;
        });
    }
})();
