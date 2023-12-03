import React from "react";
import { useState } from "react";
import { sendMessage } from "react-chat-engine";
import { isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

function MessageForm(props){

    const [value, setValue] = useState('');
    const {chatId, creds} = props;

    function submitHandler(event){
        event.preventDefault();

        const text = value.trim();

        if(text.length>0){
            sendMessage(creds, chatId, {text});
        }

        setValue('');
    }

    function changeHandler(event){
        setValue(event.target.value);
        isTyping(props, chatId);
    }


    function uploadHandler(event){
        sendMessage(creds, chatId, {files : event.target.files, text:''});
    }


    return(
        <form className="message-form" onSubmit={submitHandler}>
            <input
            className="message-input"
            placeholder="Message"
            value={value}
            onChange={changeHandler}
            onSubmit={submitHandler}
            />

            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>
            </label>
            <input
            type="file"
            multiple={false}
            id="upload-button"
            style={{display:'none'}}
            onChange={uploadHandler}
            />
            <button className="send-button">
                <SendOutlined className="send-icon"/>
            </button>
        </form>
    );



}

export default MessageForm;