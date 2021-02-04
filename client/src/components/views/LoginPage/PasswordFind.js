import React, { useState } from "react";
import { Formik } from 'formik';
import { Form, Icon, Input, Button, Typography } from 'antd';
const { Title } = Typography;

function PasswordFind() {
  

  return (
    <Formik
      
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">

            <Title level={2}>비밀번호 찾기</Title>
            <form onSubmit={handleSubmit} style={{ width: '350px' }}>

              <Form.Item>
                <div>
                <Input
                  id="email"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="이메일을 입력하십시오."
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                  <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                    계속
                </Button>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                    취소
                </Button>
                </div>
                 <a href="/login">로그인</a>
              </Form.Item>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default PasswordFind;


