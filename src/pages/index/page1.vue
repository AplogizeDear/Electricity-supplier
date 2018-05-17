<template>
    <div class="goods">
        <div class="content-wrapper" ref="contentWrapper">
            <div class="all">
                <ul class="types">
                    <li class="type-item " v-for="(item, index) in types" :key="index" >
                        <img :src="item.src" alt="">
                        <p class="text">
                            {{item.name}}
                        </p>
                    </li>
                </ul>

                <div class="activity">
                    <span class="title">好物低价-限时购</span>
                    <span class="time">20:00</span>
                    <span class="detail">{{hour}}</span>
                    : <span class="detail">{{min}}</span>
                    : <span class="detail">{{sec}}</span>
                    <span class="more arrow-right">
                      <a href="">更多</a>
                    </span>

                </div>

                <ActivityList></ActivityList>

                <section class="mixcart-list">

                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../common/util/mock.js'
    import ActivityList from '../../components/ActivityList.vue'
    export default {
        name: "page1",
        data(){
            return {
                types: [
                    {name: '分类', src: 'static/icon/type.jpg'},
                    {name: '签到', src: 'static/icon/sign.jpg'},
                    {name: '凑团', src: 'static/icon/tuan.jpg'},
                    {name: '宝箱', src: 'static/icon/box.jpg'},
                    {name: '颜值贷', src: 'static/icon/money.jpg'},
                ],
                hour: 9,
                min: 13,
                sec: 13
            }
        },
        created(){
            this.interval = setInterval(() => {
                if(this.sec > 0) {
                    this.sec--
                } else {
                    this.sec = 60
                    if(this.min > 0) {
                        this.min--
                    } else {
                        this.min = 60
                        this.hour--
                    }
                }
                if(this.hour == 0 && this.min == 0 && this.sec == 0)
                    clearInterval(this.interval)
            }, 1000)
        },
        components:{
            ActivityList
        }
    }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
@import '../../common/stylus/mixin.styl'
.goods{
    overflow:hidden;
    position:absolute;
    width:100%;
    top:1.8rem;
    bottom:1.5rem;
    display:flex;
}
.goods .content-wrapper{
    overflow:hidden;
    width:100%;
}
.content-wrapper .all{
    margin:0.3rem;
}
.content-wrapper .types {
    width: 100%;
    height: 1.62rem;
    display: flex;
    justify-content: space-between;
}
.types .type-item{
    float: left;
    width:1.42rem;
    height:1.42rem;
    text-align center;
}
.type-item img{
    display: block;
    height:1.42rem;
    margin-bottom:0.2rem;
}
.all .activity{
    padding:.8875rem .375rem .35625rem 0;
    font-size: .346667rem;
    color:mainColor;
    position:relative;
    overflow: hidden;
    border-line()
}
.activity .title {
    font-size: .446667rem;
}
.activity .time {
    font-size .346667rem
    color fontColor
    vertical-align middle
    display inline-block
    padding 0 .4rem 0 0.2rem
}
.activity .detail {
    border .01rem solid #E4E4E4
    width .88125rem
    height .5625rem
    padding 0 .08rem
    border-radius 20%
}
.activity .more {
    position relative
    color fontColor
    arrow-right(0.2 rem)
    float right
}
.activity .more:after{
    top:0.08rem;
}
.mixcart-list
    margin-top .5rem
    .tab-title
        padding 0 .8375rem .12rem
        font-size .46875rem
        .title-item
            color fontColor
            &:first-child
                margin-right 1.8375rem
            &.tab-click
                color mainColor
</style>