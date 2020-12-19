import { Col, Input, Form, DatePicker, Row, Select, Button } from "antd";
import React from "react";

const style = { background: "#0092ff", padding: "8px 0" };
const AntForm = () => {
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 4,
            },
            sm: {
                span: 12,
            },
        },
        wrapperCol: {
            xs: {
                span: 12,
            },
            sm: {
                span: 24,
            },
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 16,
            span: 24,
        },
    };
    const tailLayout2 = {
        wrapperCol: {
            offset: 1,
            span: 12,
        },
    };
    return (
        <Form {...formItemLayout}>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <Form.Item
                        label="Chủ sở hữu"
                        // validateStatus="error"
                        help="vui lòng điền chủ sở hữu"
                        rules={[{ required: true }]}
                    >
                        <Input id="owner" />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Form.Item
                        label="Năm sinh"
                        // validateStatus="error"
                        help="chọn ngày tháng năm sinh"
                    >
                        <DatePicker id="dob" />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Form.Item
                        label="Quốc gia"
                        // validateStatus="error"
                        help="chọn quốc gia"
                    >
                        <Select id="nation" />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Form.Item
                        label="Tỉnh/thành phố"
                        // validateStatus="error"
                        help="chọn tỉnh thành phố"
                    >
                        <Select id="city" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <Form.Item
                        label="Quận/huyện"
                        // validateStatus="error"
                        help="chọn quận huyện"
                    >
                        <Select id="district" />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Form.Item
                        label="Phường/xã"
                        // validateStatus="error"
                        help="chọn phường xã"
                    >
                        <Select id="road" />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Form.Item
                        label="Địa chỉ"
                        labelAlign="left"
                        // validateStatus="error"
                        help="vui lòng điền địa chỉ"
                        rules={[{ required: true }]}
                    >
                        <Input id="address" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                    <Form.Item
                        label="Số CCCD/CMND/hộ chiếu chủ sở hữu xe: "
                        labelAlign="left"
                        // validateStatus="error"
                        // help="vui lòng điền địa chỉ"
                        rules={[{ required: true }]}
                    >
                        <Input id="address" />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Form.Item
                        label="Cấp ngày: "
                        // validateStatus="error"
                        help="ngày cấp "
                    >
                        <DatePicker id="oIssueDate" />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Form.Item
                        label="Nơi cấp"
                        // validateStatus="error"
                        help="vui lòng điền nơi cấp"
                        rules={[{ required: true }]}
                    >
                        <Input id="oIssuePlace" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                    <Form.Item
                        label="Số CCCD/CMND/hộ chiếu của NLTT: "
                        labelAlign="left"
                        // validateStatus="error"
                        // help="vui lòng điền địa chỉ"
                        rules={[{ required: true }]}
                    >
                        <Input id="address" />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Form.Item
                        label="Cấp ngày: "
                        // validateStatus="error"
                        help="ngày cấp "
                    >
                        <DatePicker id="sIssueDate" />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Form.Item
                        label="Nơi cấp"
                        // validateStatus="error"
                        help="vui lòng điền nơi cấp"
                        rules={[{ required: true }]}
                    >
                        <Input id="sIssuePlace" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                    <Form.Item
                        label="Điện thoại của chủ sở hữu xe: "
                        labelAlign="left"
                        // validateStatus="error"
                        // help="vui lòng điền địa chỉ"
                        rules={[{ required: true }]}
                    >
                        <Input id="oPhoneNumber" />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Form.Item
                        label="Email của chủ sở hữu xe: "
                        labelAlign="left"
                        // validateStatus="error"
                        // help="vui lòng điền địa chỉ"
                        rules={[{ required: true }]}
                    >
                        <Input id="oEmail" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                    <Form.Item
                        label={
                            <label style={{ color: "blue" }}>
                                Điện thoại của người làm thủ tục:{" "}
                            </label>
                        }
                        labelAlign="left"
                        style={{ color: "red" }}
                        // validateStatus="error"
                        // help="vui lòng điền địa chỉ"
                        rules={[{ required: true }]}
                    >
                        <Input id="sPhoneNumber" />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Form.Item
                        label="Email của người làm thủ tục: "
                        // validateStatus="error"
                        // help="vui lòng điền địa chỉ"
                        rules={[{ required: true }]}
                    >
                        <Input id="sEmail" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                    <Form.Item {...tailLayout}>
                        <Button
                            htmlType="submit"
                            id="issuePR"
                            style={{
                                backgroundColor: "green",
                                color: "white",
                                align: "right",
                            }}
                        >
                            Cấp biển
                        </Button>
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Form.Item {...tailLayout2}>
                        <Button
                            id="refresh"
                            style={{
                                backgroundColor: "green",
                                color: "white",
                                align: "right",
                            }}
                        >
                            Làm mới
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default AntForm;
