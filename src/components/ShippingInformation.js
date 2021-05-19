import React, { useState } from 'react';
import { Form, Input, Button,Alert,message } from 'antd';

const FormLayout = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const [inputs,setInputs]=useState({
      name:'',
      surname:'',
      dni:'',
      address:'',
      number:''
  })

  const [error,setError]=useState(false)

  const handleChange=(e)=>
  {

    setInputs(
        {
            ...inputs,
            [e.target.name]:e.target.value
        }
    )
    
  }

  const handleSubmit=()=>
  {
    if(inputs.name.length===0 || inputs.surname.length===0 || inputs.dni.length===0 || inputs.address.length===0 || inputs.number.length===0)
    {
        setError(true)
    }
    
    else
    {
      setError(false)
      openMessage();
    }
  }
  
  const key = 'updatable';

  const openMessage = () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content: 'Gracias por probar la demo!', key, duration: 5});
    }, 1000);
  };

  return (
    <>
        {error && <Alert style={{marginBottom:'40px'}}message="Faltan rellenar los campos" type="error" />}
      
      
        <Form

          layout={formLayout}
          form={form}
          initialValues={{
            layout: formLayout,
          }}
          onValuesChange={onFormLayoutChange}
        >
          <Form.Item label="Nombre">
            <Input name="name" onChange={handleChange} placeholder="Ingrese su nombre" />
          </Form.Item>
          <Form.Item label="Apellido">
            <Input name="surname" onChange={handleChange} placeholder="Ingrese su apellido" />
          </Form.Item>
          <Form.Item label="DNI">
            <Input type="number" name="dni" onChange={handleChange} placeholder="Ingrese su DNI" value={inputs.dni} maxLength={8}/>
          </Form.Item>
          <Form.Item label="Dirección">
            <Input name="address" onChange={handleChange} placeholder="Ingrese su dirección exacta" />
          </Form.Item>
          <Form.Item label="Teléfono">
            <Input type="number" name="number" onChange={handleChange} placeholder="Ingrese su número de teléfono" value={inputs.number} />
          </Form.Item>
          <Form.Item>
            <button style={{
                width:'100%',
                background:'green',
                color:'white',
                padding:'10px 0',
                border:'0',
                outline:'0',
                cursor:'pointer',
                borderRadius:'10px'
                }} onClick={handleSubmit}>Continuar</button>
          </Form.Item>
        </Form>
    </>
  );
};

export default FormLayout;