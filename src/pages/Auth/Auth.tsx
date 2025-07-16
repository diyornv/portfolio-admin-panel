import { Button, Form, Input } from 'antd';
import { EyeIcon, EyeOffIcon, UserRound, KeyRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useLogin } from './services/useLogin';
import { useAuthStore } from '../../store/auth';

export const Auth = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const { mutate, isPending } = useLogin();

  const onFinish = (values: { email: string; password: string }) => {
    mutate(values, {
      onSuccess: (data) => {
        login(data);
        Swal.fire({
          icon: 'success',
          title: 'You have logged in successfully!',
          showConfirmButton: true,
          confirmButtonColor: '#6c63ff',
          customClass: {
            popup: 'rounded-2xl',
            confirmButton: 'rounded-lg px-8 py-2 text-base',
          },
        }).then(() => {
          navigate('/');
        });
      },
      onError: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: error?.response?.data?.message || 'Invalid password',
          text: 'Please check your email and password.',
          showConfirmButton: true,
          confirmButtonColor: '#6c63ff',
          customClass: {
            popup: 'rounded-2xl',
            confirmButton: 'rounded-lg px-8 py-2 text-base',
          },
        });
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232946] via-[#232946] to-[#2d3250] relative">
    
      <div className="w-full max-w-md bg-[#232946]/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center z-10">
        <div className="mb-8 flex flex-col items-center">
          <div className="bg-white rounded-full p-2 mb-2">
            <img src="/vite.svg" alt="Logo" className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-1 tracking-widest">ADMIN PANEL</h2>
          <p className="text-gray-300 text-sm">Control panel login</p>
        </div>
        <Form
          layout="vertical"
          name="loginForm"
          style={{ width: '100%' }}
          onFinish={onFinish}
          autoComplete="off"
          className="flex flex-col w-full !font-poppins"
        >
          <Form.Item
            label={<span className="font-medium text-gray-200">Email</span>}
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            className="w-full"
          >
            <Input
              prefix={<UserRound className="text-[#6c63ff]" />}
              className="w-full !rounded-xl !p-2 !font-poppins border border-gray-600 focus:border-[#6c63ff] transition bg-[#232946] text-white placeholder-gray-400"
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-gray-200">Password</span>}
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            className="w-full"
          >
            <Input.Password
              prefix={<KeyRound className="text-[#6c63ff]" />}
              iconRender={(visible) =>
                visible ? <EyeIcon /> : <EyeOffIcon />
              }
              className="w-full !rounded-xl !p-2 !font-poppins border border-gray-600 focus:border-[#6c63ff] transition bg-[#232946] text-white placeholder-gray-400"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item className="!mb-0">
            <Button
              loading={isPending}
              className="w-full !rounded-xl !h-10 !font-medium bg-[#ffb400] hover:bg-[#ffb400]/90 text-[#232946] text-lg border-none transition"
              type="primary"
              htmlType="submit"
              style={{ boxShadow: '0 4px 16px 0 #ffb40044' }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};