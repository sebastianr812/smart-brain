import React, { Component, useState, useEffect } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';





class ProfileIcon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropDownOpen: false
        }

    }

    toggle = () => {

        this.setState(prevState => ({
            dropDownOpen: !prevState.dropDownOpen
        }));
    }

    onSignOut = () => {
        fetch('http://localhost:3000/signout', {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
                "Authorization": window.sessionStorage.getItem('token')
            },
            body: JSON.stringify({
                confirmSignout: 'true'
            })

        })
            .then(response => response.json())
            .then(data => {
                if (data.includes('success')) {
                    window.sessionStorage.clear()
                }
            })
        this.props.onRouteChange('signout');
    }

    render() {

        return (
            <div className='pa4 tc'>


                <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle} >
                    <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropDownOpen}
                    >

                        <img
                            src="https://robohash.org/1/"
                            className="br-100 ba h3 w3 dib" alt="avatar"
                        />
                    </DropdownToggle>
                    <DropdownMenu
                        right
                        className='b--transparent shadow-5'
                        style={{ marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0,5)' }}>
                        <DropdownItem onClick={this.props.toggleModal} >View Profile</DropdownItem>
                        <DropdownItem onClick={this.onSignOut} >Sign Out</DropdownItem>

                    </DropdownMenu>
                </Dropdown>




            </div>
        );
    }

}


// const ProfileIcon = ({ direction, ...args }) => {
//     const [dropDownOpen, setDropDownOpen] = useState(false);

//     const toggle = () => {

//         setDropDownOpen((prevState) => !prevState);

//     }



//     return (
//         <div className='pa4 tc'>
//             <Dropdown toggle={toggle} isOpen={dropDownOpen} direction='down'>
//                 <DropdownToggle
//                     data-toggle="dropdown"
//                     tag="span"
//                 >
//                     <img
//                         src="https://robohash.org/1/"
//                         className="br-100 ba h3 w3 dib" alt="avatar"
//                     />
//                 </DropdownToggle>
//                 <DropdownMenu {...args} >
//                     <DropdownItem>View Profile</DropdownItem>
//                     <DropdownItem>Sign Out</DropdownItem>
//                 </DropdownMenu>
//             </Dropdown>


//         </div>








//     );
// }

// ProfileIcon.propTypes = {
//     direction: PropTypes.string,
// };

export default ProfileIcon