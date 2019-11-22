/*
 * @Author: your name
 * @Date: 2019-11-22 10:29:34
 * @LastEditTime: 2019-11-22 14:09:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \miaomiao\src\components\JS\index.js
 */
import Vue from 'vue';
import MessageBox from './MessageBox';

// 用闭包模仿块级作用域 
// 随着闭包函数的退出，执行环境销毁，变量回收
export var messageBox = (function(){

    var defaults = {  //默认值
        title : '',
        content : '',
        cancel : '',
        ok : '',
        handleCancel : null,
        handleOk : null
    };

    var MyComponent = Vue.extend(MessageBox);

    return function( opts ){  //配置参数

        for (var attr in opts) {
            defaults[attr] = opts[attr];
        }

        var vm = new MyComponent({
            el : document.createElement('div'),
            data : {
                title : defaults.title,
                content : defaults.content,
                cancel : defaults.cancel,
                ok : defaults.ok
            },
            methods : {
                handleCancel(){
                    // 如果call用bind只会改指向
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild( vm.$el );
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild( vm.$el );
                }
            }
        });

        document.body.appendChild( vm.$el );
    }
})();