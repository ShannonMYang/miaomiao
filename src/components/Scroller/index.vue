<!--
 * @Description: 封装better-scroll组件
 * @Author: your name
 * @Date: 2019-07-05 17:33:00
 * @LastEditTime: 2019-07-09 17:12:01
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="wrapper" ref="wrapper">
        <!-- 插槽 -->
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name : 'Scroller',
    props : {
        handleToScroll : {
            type : Function,
            default : function(){}
        },
        handleToTouchEnd : {
            type : Function,
            default : function(){}
        }
    },
    mounted(){
        var scroll = new BScroll( this.$refs.wrapper, {
            tap : true,
            probeType : 1
        });

        this.scroll = scroll;

        // 回调
        scroll.on('scroll',(pos)=>{
            this.handleToScroll(pos);
        });

        // 回调
        scroll.on('touchEnd',(pos)=>{
            this.handleToTouchEnd(pos);
        });
    },
    methods : {
        toScrollTop(y){
            this.scroll.scrollTo(0,y);
        }
    }
}
</script>

<style scoped>
.wrapper{ height: 100% }
</style>
