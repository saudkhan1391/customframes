import React,{useState} from 'react'
import Styles from "./styles";
import { MdPersonOutline, FiShoppingCart } from 'react-icons/all'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
export default function SectionOne() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <div >
                <Navbar color="light" light expand="md" >
                    <NavbarBrand href="/">INDEX.</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        {/* <Nav className="mr-auto" navbar> */}
                        <Nav navbar style={{ marginLeft: 900 }} >

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    SERVICES
</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
</DropdownItem>
                                    <DropdownItem>
                                        Option 2
</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    FRAMES
</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
</DropdownItem>
                                    <DropdownItem>
                                        Option 2
</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/components/">BLOG</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">CONTACT US</NavLink>
                            </NavItem>
                        </Nav>
                        <div>
                            <MdPersonOutline size={27} style={{ marginLeft: 30 }} />
                            <FiShoppingCart size={27} style={{ marginLeft: 30 }} />
                        </div>
                        {/* <NavbarText>Blogs</NavbarText> */}
                    </Collapse>
                </Navbar>
            </div>
            <div className="main">

                <div className="imgContainer1">
                    <img src={require("../../../assets/images/a.png")} 
                    className="imgStyle"
                    />
                </div>
                <div className="rightSide">
                    <h1>A NEW APPROACH TO CUSTOM FRAME</h1>
                    <p className="loremParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="framingBtn" >Start Framming</button>
                </div>
            </div>
            <Styles />
        </div>
    )
}