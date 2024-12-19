// import { qrCodeGen } from "./qrcode-gen.js";
export function displayEvents(events) {
    const linkUrl = "./event.html?uuid=";
    events.forEach((event) => {
        console.log(event);
        const list = document.querySelector("#list");
        const template = document.querySelector("#event");
        const clone = template.content.cloneNode(true);
        const title = clone.querySelector(".title");
        title.textContent = event.title;
        const desc = clone.querySelector(".desc");
        desc.textContent = event?.desc;
        const date = clone.querySelector(".date");
        date.textContent = event.date;
        const uuid = clone.querySelector(".uuid");
        uuid.textContent = event.uuid;
        const link = clone.querySelector(".link");
        link.href = linkUrl + event.uuid;

        const qrCode = clone.querySelector(".qrcode");

        const qr = qrcode(0, "L"); // Niveau 0, correction d'erreur 'L'
        qr.addData(`${linkUrl}${event.uuid}`); // URL à encoder
        qr.make();

        qrCode.innerHTML = qr.createSvgTag();

        list.appendChild(clone);
    });
}
