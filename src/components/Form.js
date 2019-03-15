import React from 'react';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'111',
            msg:'react表单',
            name:'',
            sex:'1',
            city:'',
            citys:[
                '北京','上海','深圳'
            ],
            hobby:[
                {
                    'title':'睡觉',
                    'checked':true
                },
                {
                    'title':'chifan',
                    'checked':false
                },
                {
                    'title':'dadoudou',
                    'checked':true
                }
            ],
            hobbies:[true,false,true],
            info:''
         };
    }
    handelSubmit=(e)=>{
        // 如果写form，要写阻止submit的提交事件
        e.preventDefault();
        console.log(this.state.name,this.refs.city.value,this.state.hobby,this.state.hobbies,this.state.info)
    }
    handelName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handelSex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    handelCity=(e)=>{
        this.setState({
            city:e.target.value
        })
    }
    handelHobby(key){
        var hobby = this.state.hobby;
        hobby[key].checked = !hobby[key].checked;
        this.state.hobbies=this.state.hobby.map((value)=>{
            return value.checked
        })
        this.setState({
            hobby:hobby
        })
    }
    // this指向当前组件
    handelInfo=(e)=>{
        this.setState({
            info:e.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                {/* 单页面应用，不用放在form中 */}
                <form onSubmit={this.handelSubmit}>
                    用户名：<input type="text" value={this.state.name} onChange={this.handelName} /><br /><br />
                    性别：  <input type="radio" value='1' checked={this.state.sex ==='1'} onChange={this.handelSex} />男
                            <input type="radio" value='2' checked={this.state.sex ==='2'} onChange={this.handelSex} />女
                            <br /><br />
                    居住：
                    <select value={this.state.city} onChange={this.handelCity}>
                        {
                            this.state.citys.map(function(value,key){
                                return(<option key={key}>{value}</option>)
                            })
                        }
                    </select>
                    <br /><br />
                    居住：
                    {/* ref写法 */}
                    <select  ref="city">
                        {
                            this.state.citys.map(function(value,key){
                                return(<option key={key}>{value}</option>)
                            })
                        }
                    </select>
                    <br /><br />
                    爱好：
                    {
                        // 注意当前this指向
                        // checked不写onChange会报错
                        this.state.hobby.map((value,key)=>{ 
                            return(
                                <div key={key}>
                                    <input type="checkBox" checked={value.checked}  onChange={this.handelHobby.bind(this,key)}/>{value.title}
                                </div>
                            )
                        })
                    }
                    <br /><br />
                    备注：<textarea value={this.state.info} onChange={this.handelInfo} />
                    <br /><br />
                    <input type="submit" defaultValue="提交" />
                </form>
                
            </div>
        );
    }
}

export default Form;