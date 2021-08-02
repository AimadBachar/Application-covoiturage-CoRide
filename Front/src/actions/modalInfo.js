export const CLOSE_MODAL = "CLOSE_MODAL";
export const ACTIVE_MODAL = "ACTIVE_MODAL";

export const closeModal = ()=>({
    type: CLOSE_MODAL
});

export const activeModal = (payload)=>({
    type: ACTIVE_MODAL,
    payload
})