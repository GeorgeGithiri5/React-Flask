import React, { Component } from 'react'
import {getList, addToList, deleteItem, updateItem} from './ListFunction'

class List extends Component{
    constructor(){
        super()
        this.state = {
            id:'',
            term:'',
            editDisabled: false,
            items: []
        }
    }

    componentDidMount(){
        this.getAll()
    }
    onChange=e=>{
        this.setState({
            term:e.target.value,
            editDisabled: 'disabled'
        })
    }
    getAll = () =>{
        getList().then(data=>{
            this.setState(
                {
                    term:'',
                    items: [...data]
                },
                ()=>{
                    console.log(this.state.term)
                }
            )
        })
    }
    onSubmit = e =>{
        e.preventDefault()
        this.setState({editDisabled: ''})
        addToList(this.state.term)
                .then(()=>{
                    this.getAll()
                })
    }
    onUpdate = e =>{
        e.preventDefault()
        updateItem(this.state.term, this.state.id)
        .then(()=>{
            this.getAll()
        })
    }
    onEdit = (item, itemid, e) =>{
        e.preventDefault()
        this.setState({
            id: itemid,
            term: item
        })
        console.log(itemid)
    }
    onDelete = (val, e)=>{
        e.preventDefault()
        deleteItem(val)

        var data = [...this.state.items]
        data.filter((item, index)=>{
            if(item[1]===val){
                data.splice(index, 1)
            }
            return true
        })
        this.setState({items:[...data]})
    }
    render(){
        return(
            <div className="col-md-12">
                <form className={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="input1">
                            Task Name
                        </label>
                        <div className="row">
                            <div className="col-md-9">
                                <input
                                    type = "text"
                                    className="form-control"
                                    id = "input1"
                                    value = {this.state.term || ''}
                                    onChange = {this.onChange}
                                />
                            </div>
                            <div className="col-md-2">
                                <button
                                    className="btn btn-primary"
                                    onClick = {this.onUpdate}
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        onClick={this.onSubmit}
                        className="btn btn-success btn-block"
                    >
                        Submit
                    </button>
                </form>
                <table className="table">
                    <tbody>
                        {this.state.items.map((item, index)=>(
                            <tr key={index}>
                                <td className="text-left">{item[0]}</td>
                                <td className="text-right">
                                    <button
                                        className="btn btn-info mr-1"
                                        disabled = {this.state.editDisabled}
                                        onClick = {this.onEdit}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className = "btn btn-danger"
                                        disabled = {this.state.editDisabled}
                                        onClick = {this.onDelete.bind(this)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List