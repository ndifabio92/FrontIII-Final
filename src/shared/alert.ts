import Swal from "sweetalert2"

export const swalAlert = (icon: string, title: string, text: string) => (
    Swal.fire({
        icon,
        title,
        text
    })
)