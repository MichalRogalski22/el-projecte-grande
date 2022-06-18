import {Button, Container, Form} from "react-bootstrap";
import React, {useState} from "react";
import ModalTop from "../modal/ModalTop";

const AddMember = () => {

    const memberAdded = {
        title: "Użytkownik dodany",
        text: "Udało sie pomyślnie dodać użytkownika do Twojej spółki."
    }

    const [isOpenForAdded, setIsOpenForAdded] = useState(false);
    const backToPreviousAddedState = () => setIsOpenForAdded(false);

    const [KRSNumber, setKRSNumber] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [roleType, setRoleType] = useState('');

    const Add = (e) => {
        e.preventDefault();
        const userData = {KRSNumber, userEmail, roleType};
        fetch("http://localhost:8080/add-member-to-company", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData)
        }).then(response => {
            if (response.status === 200) {
                setIsOpenForAdded(true);
                setTimeout(backToPreviousAddedState, 4000);
                return response.blob();
            } else {
                throw new Error("Can't save new member!");
            }
        }).catch(() => {
            console.log("Something went wrong!")
        });
    }

    return (
        <div className="add-new-member-to-company-div">
            <Container className="add-new-member">
                <form className="form-control" onSubmit={Add}>
                    <Form.Control className="krs-input" type="text" placeholder="Numer KRS..." value={KRSNumber} required={true}
                                  onChange={(e) => setKRSNumber(e.target.value)}/>
                    <Form.Control className="email-input" type="text" placeholder="Email..." value={userEmail} required={true}
                                  onChange={(e) => setUserEmail(e.target.value)}/>
                    <input type="radio" name="role-type" value="OWNER" checked={roleType === "OWNER"}
                           onChange={(e) => {setRoleType("OWNER")}}/> Właściciel
                    <input type="radio" name="role-type" value="EDITOR" checked={roleType === "EDITOR"}
                           onChange={(e) => {setRoleType("EDITOR")}}/> Edytor
                    <input type="radio" name="role-type" value="READER" checked={roleType === "READER"}
                           onChange={(e) => {setRoleType("READER")}}/> Przeglądający
                    <Button variant="primary" size="md" className="btn btn-block" type="submit">Dodaj do spółki</Button>
                    {isOpenForAdded && <ModalTop info={memberAdded} />}
                </form>
            </Container>
        </div>
    )
}

export default AddMember