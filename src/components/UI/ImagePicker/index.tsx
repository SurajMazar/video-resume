import { Avatar, Button, FormInstance, Upload, UploadFile } from 'antd'
import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { CameraOutlined } from '@ant-design/icons'
import { UploadChangeParam } from 'antd/es/upload'

const ImagePicker: React.FC<{
  label: string
  name: string
  onChangeHandler?: (event: UploadChangeParam<UploadFile<any>>) => void
  defaultValue?: string
  shape: 'circle' | 'square' | undefined
  rules?: Array<any>
  previewSize?: number
  buttonText: string
  form: FormInstance<any>
}> = (props) => {
  /**
   * COMPONENT PROPS
   */
  const {
    label,
    name,
    onChangeHandler,
    defaultValue,
    shape,
    rules,
    previewSize,
    buttonText,
    form
  } = props

  /**
   * COMPONENT STATE
   */
  const [preview, setPreview] = useState<string | null>(null)

  /**
   * DEFAULT VALUE
   */
  useEffect(() => {
    if (defaultValue) {
      setPreview(defaultValue)
    }
  }, [defaultValue])

  /**
   * REMOVE IMAGE
   */
  const removeImage = () => {
    setPreview(null)
    resetForm()
  }

  /**
   * REST FORM
   */
  const resetForm = () => {
    let updated: any = {}
    updated[name] = null
    form.setFieldsValue(updated)
  }

  /** Dummy request for antd */
  const dummyRequest = (data: any) => {
    const { file, onSuccess } = data //eslint-disable-line
    setTimeout(() => {
      onSuccess('ok')
    }, 0)
  }

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      getValueFromEvent={(event) => {
        return URL.createObjectURL(event?.target?.files[0])
      }}
    >
      <div
        className="flex flex-wrap flex-col
                bg-white space-x-2 space-y-4 p-5
                items-center rounded-md"
      >
        {preview ? (
          <Avatar size={previewSize || 100} shape={shape} src={preview} />
        ) : (
          <Avatar
            size={previewSize || 100}
            shape={shape}
            className="bg-primary"
            icon={<CameraOutlined />}
          />
        )}
        <div className="flex flex-wrap space-x-2 items-center">
          <Upload
            accept={'.png,.jpg,.jpeg,.webp'}
            customRequest={dummyRequest}
            showUploadList={false}
            multiple={false}
            onChange={async (event) => {
              setPreview(URL.createObjectURL(event?.file?.originFileObj!))
              if (onChangeHandler) {
                onChangeHandler(event)
              }
            }}
          >
            <Button type="dashed" htmlType="button">
              {buttonText}
            </Button>
          </Upload>

          {preview ? (
            <Button
              onClick={removeImage}
              type="default"
              htmlType="button"
              className="text-red-400 border-red-400"
            >
              Remove
            </Button>
          ) : (
            ''
          )}
        </div>
      </div>
    </Form.Item>
  )
}

export default ImagePicker
