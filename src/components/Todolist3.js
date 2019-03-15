import React, { Component } from 'react';
import storage1 from '../model/storage1';
class Todolist3 extends Component{
    constructor(prop){
        super(prop);
        this.state={
            list:[
                {
                    title:'123',
                    checked:true
                },
                {
                    title:'234',
                    checked:false
                },
                {
                    title:'345',
                    checked:true
                },
                {
                    title:'456',
                    checked:true
                },
                {
                    title:'567',
                    checked:true
                },
                {
                    title:'789',
                    checked:true
                }
            ]
        }
    }
    addData=(e)=>{
        if(e.keyCode === 13){
            let tempList = this.state.list;
            tempList.push({
                title: this.refs.title.value,
                checked:false
            })
            this.setState({
                list:tempList
            });
            this.refs.title.value = '';
            storage1.set('todoList',tempList)
        }
    }
    removeData=(key)=>{
        let tempList =this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        });
        storage1.set('todoList',tempList)
    }
    checkboxChange=(key)=>{
        var tempList = this.state.list;
        tempList[key].checked = !tempList[key].checked;
        this.setState({
            list:tempList
        })
        storage1.set('todoList',tempList)
    }
    componentDidMount=()=>{
        var todoList = storage1.get('todoList');
        this.setState({
            list:todoList
        })
    }
    render(){
        return(
            <div>
                <input type="text" ref="title" onKeyUp={this.addData}/>
                <h2>待办事项</h2>
                <hr />
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(!value.checked){
                                return(
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key)} />
                                        {value.title}------
                                        <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }   
                        })
                    }
                </ul>
                <h2>已办事项</h2>
                <hr />
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(value.checked){
                                return(
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key)} />
                                        {value.title}------
                                        <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }   
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Todolist3;