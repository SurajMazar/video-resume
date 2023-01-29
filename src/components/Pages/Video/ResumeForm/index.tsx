import ImagePicker from '@/components/UI/ImagePicker'
import { VideoPlayerContext } from '@/context/VideoPlayerContext'
import { Button, Col, Divider, Form, Input, Row } from 'antd'
import React, { useContext } from 'react'
import { ResumeFormInterface } from 'types/form/resume'

const ResumeForm: React.FC = () => {
  /**
   * VIDEO PLAYER CONTEXT
   */
  const { onFormSubmit } = useContext(VideoPlayerContext)

  /**
   * ANTD FORM HOOK
   */
  const [form] = Form.useForm<ResumeFormInterface>()

  /**
   * HANDLE FORM SUBMISSION
   * @param values
   */
  const onFinish = (values: ResumeFormInterface) => {
    onFormSubmit(values)
  }

  return (
    <>
      <section className="p-6 w-full md:w-1/2 rounded-md bg-white">
        <Divider plain className=" mb-8">
          <h3 className="text-primary text-2xl uppercase">Resume Form</h3>
        </Divider>

        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={[12, 12]}>
            <Col xs={24} md={12}>
              <ImagePicker
                name="profile_picture"
                label="Profile Picture"
                buttonText="Add profile picture"
                form={form}
                defaultValue=""
                shape="circle"
                previewSize={200}
                rules={[
                  {
                    required: true,
                    message: 'Profile picture is required!'
                  }
                ]}
              />
            </Col>
            <Col xs={24} md={12}>
              {/* NAME */}
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Name is required!'
                  }
                ]}
              >
                <Input type="text" size="large" placeholder="Your name ..." />
              </Form.Item>

              {/* NAME */}
              <Form.Item
                label="Name"
                name="short_description"
                rules={[
                  {
                    required: true,
                    message: 'Short description is required!'
                  }
                ]}
              >
                <Input.TextArea
                  maxLength={200}
                  showCount
                  size="large"
                  rows={5}
                  placeholder="Short description"
                />
              </Form.Item>
            </Col>

            <Col xs={24}>
              <div className="text-center">
                <Button
                  shape="round"
                  size="large"
                  htmlType="submit"
                  className="bg-primary"
                  type="primary"
                >
                  Visualize
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </section>
    </>
  )
}

export default ResumeForm
