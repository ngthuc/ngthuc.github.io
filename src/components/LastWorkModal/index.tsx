import React from 'react';
import './style.modal.css';
import {Dialog, DialogContent, Typography} from "@mui/material";

const LastWorkModal = (props: { lastWork: any, visible: boolean, onClose: any }) => {
    const {lastWork, visible, onClose} = props;

    return (
        <Dialog open={visible} onClose={() => onClose(!visible)} maxWidth={'md'} aria-labelledby="customized-dialog-title">
            <DialogContent dividers>
                <img src={`images/lastwork/${lastWork['key']}.max.png`} alt="project-overview"/>
                <Typography key="project-name" style={{fontSize: 14}}>
                    <b>Project:</b> {lastWork['name']}
                </Typography>
                <Typography key="url" style={{fontSize: 14}}>
                    <b>URL:</b> {lastWork['url'] !== 'null' && <a href={lastWork['url']} target="_blank">{lastWork['url']}</a>}
                    {lastWork['url-status'] !== 'active' && `(${lastWork['url-status']})`}
                </Typography>
                <Typography key="time" style={{fontSize: 14}}>
                    <b>Time:</b> {lastWork['time']}
                </Typography>
                <Typography key="technical" style={{fontSize: 14}}>
                    <b>Technical:</b> {lastWork['technical']}
                </Typography>
                <Typography key="position" style={{fontSize: 14}}>
                    <b>Position:</b> {lastWork['position']}
                </Typography>
            </DialogContent>
        </Dialog>
    );
}

export default LastWorkModal;