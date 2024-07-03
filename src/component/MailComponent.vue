<template>
    <div>
        <form ref="form" @submit.prevent="sendEmail">
            <label>您的名稱</label>
            <input type="text" name="user_name" placeholder="輸入姓名/ input-your-name">
            <label>您的電子郵件</label>
            <input type="email" name="user_email" placeholder="輸入電子郵件/email">
            <label>您想對我們說的話</label>
            <textarea name="message"></textarea>
            <button type="submit" value="Send">送出</button>
        </form>
    </div>

</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    methods: {
        sendEmail() {
            emailjs
                .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, this.$refs.form, {
                    publicKey: import.meta.env.VITE_MAIL_PUBLIC_KEY,
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        },
    },
};
</script>

<style lang="scss" scoped>
form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    font-size: 16px;




    input,
    textarea {
        resize: none;
        width: 400px;
        font-size: 24px;
        border-radius: 10px;
        margin: 10px 10px 10px 1px;
        padding: 10px 0px 10px 10px;
        border: 1px solid saddlebrown;

        &:focus {
            background-color: antiquewhite;
        }

    }

    button {
        font-size: 16px;
        font-weight: 800;
        border: none;
        background-color: #e5cda1;
        width: 20%;
        border-radius: 10px;
        padding: 10px 20px;
        margin: 0% 0% 0% 77%;

        &:hover {
            background-color: black;
            color: #e5cda1;
        }
    }


}
</style>./MailComponent.vue