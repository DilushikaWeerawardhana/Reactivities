import React, { ChangeEvent } from "react";
import { useState } from "react";
import { Button, Form, FormInput, FormTextArea, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity | undefined;
    formClose: () => void;
    createOrEdit: (activity: Activity) => void;
}
export default function ActivityForm({activity: selectedActivity, formClose, createOrEdit} : Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: '',
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function hanldeInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <FormInput  placeholder='Title' value={activity.title} name='title' onChange={hanldeInputChange} />
                <FormTextArea  placeholder='Description' value={activity.description} name='description' onChange={hanldeInputChange} />
                <FormInput  placeholder='Category' value={activity.category} name='category' onChange={hanldeInputChange} />
                <FormInput  placeholder='Date' value={activity.date} name='date' onChange={hanldeInputChange} />
                <FormInput  placeholder='City' value={activity.city} name='city' onChange={hanldeInputChange} />
                <FormInput  placeholder='Venue' value={activity.venue} name='venue' onChange={hanldeInputChange} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='button' content='Cancel' onClick={formClose} />
            </Form>
        </Segment>
    )
}