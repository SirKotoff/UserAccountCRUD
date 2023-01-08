import React, { Component } from 'react';

export default class Usertable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        fetch("https://localhost:5001/api/User/Index")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        users: result
                    });
                    console.log(result);

                }
            );
    }

    render() {
        return (
            <table className="table text-white w-25">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Years</th>
                        <th scope="col">Name</th>
                        <th scope="col">Car</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    <div></div>
                    {this.state.users.map(emp => (
                        <tr id={emp.id}>
                            <th id={"idtd"+emp.id} scope="row" key={emp.id} >{emp.id}</th>
                            <td id={"yearstd"+emp.years} contenteditable='true'>{emp.years}</td>
                            <td id={"nametd"+emp.name} contenteditable='true'>{emp.name}</td>
                            <td id={"cartd"+emp.car} contenteditable='true'>{emp.car}</td>
                            <button className="btn btn-primary" onClick={(e) => {
                                fetch(`https://localhost:5001/api/User/Edit?Id=${document.getElementById(`idtd${emp.id}`).innerText}&Years=${document.getElementById(`yearstd${emp.years}`).innerText}&Name=${document.getElementById(`nametd${emp.name}`).innerText}&Car=${document.getElementById(`cartd${emp.car}`).innerText}`, {
                                    method: 'PUT',
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                }).then(response => {
                                    return response.json()
                                }).then(json => {
                                    this.setState({
                                        user: json
                                    });
                                })
                            }} >Edit</button>
                            <button className="btn btn-danger" onClick={(e) => {
                                const url = `https://localhost:5001/api/User/Delete/${emp.id}`;
                                fetch(url,
                                    {
                                        method: 'DELETE', headers: { 'Content-type': 'application/json', }
                                    }
                                ).then((res) => {
                                    if (!res.ok) {
                                        throw new Error("-");
                                    }
                                    document.getElementById(`${emp.id}`).remove();
                                    return res.json()

                                })
                            }}>Delete User</button>
                        </tr>
                    ))}
                </tbody>
                <p className="text-white">{this.state.message}</p>
            </table>
        );
    }

}