import { camera } from "./camera.js";

export const getUuid = () => {
    if (document.querySelector(".page-event")) {
        const urlParams = new URLSearchParams(window.location.search);
        const uuid = urlParams.get("uuid");
        // console.log(uuid);
        document.querySelector(".uuid").textContent = uuid;
        addUuidLocalStorage(uuid);

        camera;
    }
};

function addUuidLocalStorage(uuid) {
    localStorage.setItem("uuid", uuid);
}
