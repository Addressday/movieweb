import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";
// 
import {
  Form,
  Input,
  Button,
  Typography
} from 'antd';

const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegisterPage(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        email: '',
        nickname: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('이메일이 존재하지 않습니다.')
          .required('이메일을 입력하십시오.'),
        nickname: Yup.string()
          .required('닉네임을 입력하십시오.'),
        password: Yup.string()
          .min(6, '비밀번호는 6자리 이상입니다.')
          .required('비밀빈호를 입력하십시오.'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], '비밀번호가 일치해야합니다.')
          .required('비밀번호를 재입력하십시오.')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            email: values.email,
            nickname: values.nickname,
            password: values.password,
            image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg)
            }
          })

          setSubmitting(false);
        }, 500);
      }}
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
          <Title level={2}>회원가입</Title>
            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >


              <Form.Item required label="이메일" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <Input
                  id="email"
                  placeholder="이메일을 입력하십시오."
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item required label="닉네임">
                <Input
                  id="nickname"
                  placeholder="닉네임을 입력하십시오."
                  type="text"
                  value={values.nickname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.nickname && touched.nickname ? 'text-input error' : 'text-input'
                  }
                />
                {errors.nickname && touched.nickname && (
                  <div className="input-feedback">{errors.nickname}</div>
                )}
              </Form.Item>

              <Form.Item required label="비밀번호" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                <Input
                  id="password"
                  placeholder="비밀번호를 입력하십시오."
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item required label="비밀번호 재입력" hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="비밀번호를 재입력하십시오."
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button style={{ minWidth: '100%' }} onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  회원가입
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};


export default RegisterPage
