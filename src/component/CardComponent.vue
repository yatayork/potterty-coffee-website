<template>
    <table>
        <thead>
            <tr>
                <th>公告事項</th>
                <th>發布日期</th>
                <th>發布者</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in NewsData" :key=item.time>
                <td>{{ item.Announcement }}</td>
                <td>{{ item.time }}</td>
                <td>{{ item.Author }}</td>
            </tr>
        </tbody>
    </table>
</template>



<style lang="scss">
@import "../assets/main.scss";

table {

    @include fontConfig(18px, "", 400, "", 0.1em);
    text-align: center;
    width: 100%;


    th {
        border-radius: 10px 10px 0px 0px;
        background-color: antiquewhite;

        &:nth-child(1) {
            width: 60%;
            min-width: 10%;
        }

        &:nth-child(2) {
            width: 20%;
            min-width: 20%;
        }

        &:nth-child(3) {
            width: 20%;
            min-width: 20%;
        }


    }

    td {
        border-bottom: 1px solid black;
    }

}
</style>

<script>

export default {

    setup() {

        const NewsData = [
            {
                id: 1,
                Announcement: "預約體驗特價中!期待您的到來!",
                time: new Date().toLocaleDateString(),
                Author: "亞塔",
            },
            {
                id: 2,
                Announcement: "8/11-8/13全窯公休~~請窯友們注意~~",
                time: new Date().toLocaleDateString(),
                Author: "窯管小莉",
            },
        ]

        return {
            NewsData,
        };


    },

};

</script>