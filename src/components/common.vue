<template>
    <section>
        <header class="top_tips">
            <span class="num_tip" v-if="fatherComponent == 'home'">第一周</span>
        </header>
        <div v-if="fatherComponent == 'home'">
            <div class="home_logo item_container"></div>
            <router-link to="" class="start button_style"></router-link>
        </div>
        <div></div>
        <span></span>
    </section>
</template>
<script>
export default {
    name: 'common',
    props: ['fatherComponent']
}
</script>
<style lang="less" scoped>
.top_tips {
    position: absolute;
    top: -1.3rem;
    right: 1.6rem;
    width: 3.25rem;
    height: 7.35rem;
    background: url(../assets/images/WechatIMG2.png) no-repeat;
    background-size: 100% 100%;
    z-index: 10;
    .num_tip {
        position: absolute;
        left: 0.48rem;
        bottom: 1.1rem;
        height: 0.7rem;
        width: 2.5rem;
        font-size: 0.6rem;
        font-family: '黑体';
        font-weight: 600;
        color: #a57c50;
        text-align: center;

    }
}
.item_container {
    position: absolute;
    top: 4.1rem;
    left: 1rem;
    width: 13.15rem;
    height: 11.25rem;
    background-repeat: no-repeat;
}
.home_logo {
    background-image: url(../assets/images/1-2.png);
    background-size: 13.142rem 100%;
    background-position: right center;
}
.button_style {
    position: absolute;
    top: 16.5rem;
    left: 50%;
    height: 2.1rem;
    width: 4.35rem;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.start{
    background-image: url(../assets/images/1-4.png);
}
</style>


