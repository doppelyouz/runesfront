import {
    toast
} from 'react-toastify';

export default (referralCode) => {
    navigator.clipboard.writeText(referralCode)
        .then(() => {
            toast.success('Referral code copied to clipboard!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
        .catch((err) => {
            toast.error('Failed to copy text.', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.error('Failed to copy text: ', err);
        });
};