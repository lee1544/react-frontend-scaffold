/**
 * 每个action都有一个匹配的type，这个type和reducer中的相对应。
 * 为了避免在actions和reducers之间产生奇怪的错误，我们在此处定义type。
 * type的前缀为：yourProject/YourComponent。
 *
 * 使用格式如下：
 * export const YOUR_ACTION_CONSTANT = 'yourProject/YourContainer/YOUR_ACTION_CONSTANT';
 *
 * Created by guanzhenxing on 2017-02-24.
 */

export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
