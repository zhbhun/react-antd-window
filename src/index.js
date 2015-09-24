/**
 * Created by zhbhun on 2015/9/22.
 */
/**
 * Created by zhbhun on 2015/9/22.
 */
import React from 'react';
import assign from 'object-assign';
import Antd from 'antd';
import {Window, Modal, Confirm, Tip} from 'react-window-kit';


class AntdWindow extends Window {
    static defaultProps = assign({}, Window.defaultProps, {
        close: <i className="anticon anticon-cross-circle"/>,
        restore: <i className="anticon anticon-minus-circle"/>,
        maximize: <i className="anticon anticon-plus-circle"/>
    });
}

class AntdModal extends Modal {
    static defaultProps = assign({}, Modal.defaultProps, {
        Window: AntdWindow,
        footer: [
            <button
                key='Cancel'
                className="ant-btn"
                >
                Cancel
            </button>,
            <button
                key='Confirm'
                className="ant-btn ant-btn-primary"
                >
                Confirm
            </button>
        ]
    });
}

class AntdConfirm extends Confirm {
    static defaultProps = assign({}, Modal.defaultProps, {
        Window: AntdWindow,
        sign: <i className="anticon anticon-question-circle" style={{color: "#FF6100", top: "1px"}}/>,
        cancel: <button className="ant-btn">Cancel</button>,
        ok: <button className="ant-btn ant-btn-primary">OK</button>
    });
}

class AntdTip extends Tip {
    static defaultProps = assign({}, Modal.defaultProps, {
        Window: AntdWindow,
        sign: {
            info: <i className="anticon anticon-info-circle" style={{color: "#00A0E8", top: "1px"}}/>,
            success: <i className="anticon anticon-check-circle" style={{color: "#60BE29", top: "1px"}}/>,
            warning: <i className="anticon anticon-exclamation-circle" style={{color: "#FF6100", top: "1px"}}/>,
            danger: <i className="anticon anticon-cross-circle" style={{color: "#E01515", top: "1px"}}/>
        },
        cancel: <button className="ant-btn">Cancel</button>,
        ok: <button className="ant-btn ant-btn-primary">OK</button>
    });
}

export default {
    Window: AntdWindow,
    Modal: AntdModal,
    Confirm: AntdConfirm,
    Tip: AntdTip
};  