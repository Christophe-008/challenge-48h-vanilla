import { getAllEvents } from "./queries/get-all-events.js";

export const getListEvents = () => {
    if (document.querySelector(".page-events")) {
        getAllEvents();
    }
};
