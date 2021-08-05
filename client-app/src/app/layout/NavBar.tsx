import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

interface Props {
    formOpen: () => void;
}
export default function NavBar({formOpen} : Props) {
    return(
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivities
                </Menu.Item>
                <MenuItem name="Activities" />
                <MenuItem>
                    <Button positive content="Create Activity" onClick={formOpen} />
                </MenuItem>
            </Container>
        </Menu>
    )
}