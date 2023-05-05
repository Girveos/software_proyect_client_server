//->Clase pasada
// import React from "react";
// import { BugFilled, SearchOutlined } from "@ant-design/icons";
// import { Button, Row, Col, Space, Tooltip, Divider} from "antd";
// import { Card } from "antd";
// const { Meta } = Card;

// const App = () => {
//   return (
//     <div style={styles}>
//       {/* Fila 1 */}
//       <Divider orientation="left">Responsive</Divider>
//       <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32 }}>
//         <Col span={12}>
//           <Space wrap>
//             {/* Botón normal */}
//             <Button type="primary">Aceptar</Button>
//             {/* Botón circular */}
//             <Button type="primary" shape="circle" icon={<BugFilled />}></Button>
//             {/* Botón circular manejando tooltip */}
//             <Tooltip title="search">
//               <Button shape="circle" icon={<SearchOutlined />}></Button>
//             </Tooltip>
//             {/* Opción recomendada */}
//             <Button icon={<SearchOutlined />}>Search</Button>
//           </Space>
//         </Col>
//         <Col span={12}>
//           <Button type="primary">Aceptar</Button>
//         </Col>
//       </Row>
//       {/* Fila 2 */}
//       <Divider orientation="left">Responsive</Divider>
//       <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32 }}>
//         <Col className='gutter-row' span={6}>
//           <div style={styles}>Columna 1</div>
//         </Col>
//         <Col className='gutter-row' span={6}>
//         <div style={styles}>Columna 2</div>
//         </Col>
//         <Col className='gutter-row' span={6}>
//         <div style={styles}>Columna 3</div>
//         </Col>
//         <Col className='gutter-row' span={6}>
//         <div style={styles}>Columna 4</div>
//         </Col>
//       </Row>
//       {/* Fila 3 */}
//       <Divider orientation="left">Responsive</Divider>
//       <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32 }}>
//         <Col className='gutter-row' span={6}>
//           <Card
//             hoverable
//             style={{ width: 240 }}
//             cover={
//               <img
//                 alt="example"
//                 src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//               />
//             }
//           >
//             <Meta title="Europe Street beat" description="www.instagram.com" />
//           </Card>
//         </Col>
//         <Col className='gutter-row' span={6}>
//           <Card
//             hoverable
//             style={{ width: 240 }}
//             cover={
//               <img
//                 alt="example"
//                 src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//               />
//             }
//           >
//             <Meta title="Europe Street beat" description="www.instagram.com" />
//           </Card>
//         </Col>
//         <Col className='gutter-row' span={6}>
//           <Card
//             hoverable
//             style={{ width: 240 }}
//             cover={
//               <img
//                 alt="example"
//                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//               />
//             }
//           >
//             <Meta title="Europe Street beat" description="www.instagram.com" />
//           </Card>
//         </Col>
//         <Col span={6}>
//           <Card
//             hoverable
//             style={{ width: 240 }}
//             cover={
//               <img
//                 alt="example"
//                 src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//               />
//             }
//           >
//             <Meta title="Europe Street beat" description="www.instagram.com" />
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// const styles = (React.CSSProperties = { padding: "8px", margin: "20px" });
// export default App;

/* Clase 16/03/23 */
/* rafce -> Solo para App.js que es la main de todo el proyecto*/
import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import allRoutesProject from "./config/router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutesProject.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
