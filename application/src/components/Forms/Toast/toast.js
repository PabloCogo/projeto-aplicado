import React, { useEffect } from "react";
import styled from "styled-components";
import {CheckCircleOutline,CancelOutlined} from "@mui/icons-material"

export const ToastContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 20px;
    right: ${props=>props.msg ? "0":"-300px"};
    border-radius: 5px 0 0 5px;
    min-height: 60px;
    margin-top: 20px;
    margin-bottom: 12px;
    padding: 10px;
    width: 300px;
    overflow-x: hidden;
    max-width: 400px;
    display: none;
    align-items: center;
    justify-content: start;
    font-size: 18px;
    transition: right 1s;
    z-index: 5;
    border: 1px solid
        ${(props) =>
            !props.state
                ? "var(--border-msg-error)"
                : "var(--border-msg-success)"};
    background: ${(props) =>
        !props.state
            ? "var(--bg-msg-error)"
            : "var(--bg-msg-success)"};
    color: ${(props) =>
        !props.state
            ? "var(--color-msg-error)"
            : "var(--color--msg-success)"};

    &>svg{
        margin-right: 10px;
    }

    &>p{
        text-align: start;
    }
`;

const Toast = ({ state, msg, setMsg }) => {
    useEffect(()=>{
        if(msg !== undefined && msg !== null && msg !== ''){
            document.querySelectorAll(".toast").forEach(elem=>{
                elem.setAttribute("style","display:flex");
            })
            setTimeout(()=>{
                setMsg(null);
            },6000)
        }else{
            document.querySelectorAll(".toast").forEach(elem=>{
                if(window.getComputedStyle(elem).right === "-300px"){
                    elem.setAttribute("style","display:none");
                }
            })
        }
    },[msg])

    return (
        <>
            <ToastContainer state={state} msg={msg} className={"toast"}>
                {state 
                    ? <CheckCircleOutline/>
                    : <CancelOutlined/>
                }
                <p>
                    {msg}
                </p>
            </ToastContainer>
        </>
    )
};

export default Toast;
