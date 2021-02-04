-- Tabla roles

INSERT INTO roles (type,created_at) VALUES ('admin',NOW());
INSERT INTO roles (type,created_at) VALUES ('user',NOW());

-- Tabla users

INSERT INTO users (email, password, role_id, created_at) VALUES ('admin@hotmail.com', '$2b$10$91Umf3AjCqjb5fPuGE1.Su5DgJgE8KtBqdfCSPrkQ060m3ARhjMQu', 1, NOW());
INSERT INTO users (email, password, role_id, created_at) VALUES ('francisco@gmail.com', '$2b$10$c0AVLRddaNbDHwd3DIA1lO9eIzKUHxYM2hSEwjI7rlH8.rcru5qsS', 2, NOW());
INSERT INTO users (email, password, role_id, created_at) VALUES ('rodrigosan06@gmail.com', '$2b$10$SX9/59B3nGTPqn0Gwa4Apeo4l97uOGQY3XFLNQKvvDx6VKSAzswdu', 2, NOW());
INSERT INTO users (email, password, role_id, created_at) VALUES ('rodrigo@hotmail.com', '$2b$10$y0PFqCKB3xKZ4nMHsG/wu.nA/6b7BSGtgBNoA7hlUuBLXwHFZu6kW', 2, NOW());
INSERT INTO users (email, password, role_id, created_at) VALUES ('anav@gmail.com', '$2b$10$tDYdKWkvnskPAKdwhrTZpucLk4mQQJUgfQrPCo1sv8M.ke/vKwb2u', 2, NOW());

-- Tabla profiles

INSERT INTO profiles (user_id_profile, birthdate, age, name, lastname, image, gender, created_at) VALUES (1, '1990-01-01', 31, 'Admin', 'MiCafe', 'imagen-1611157219600.jpg', 'I', NOW());
INSERT INTO profiles (user_id_profile, birthdate, age, name, lastname, image, gender, created_at) VALUES (2, '2000-01-01', 21, 'Fran', 'Silva', 'imagen-1611095282613.jpg', 'M', NOW());
INSERT INTO profiles (user_id_profile, birthdate, age, name, lastname, image, gender, created_at) VALUES (3, '1989-01-01', 32, 'Rodri', 'Sanchez', 'imagen-1611097738412.jpg', 'M', NOW());
INSERT INTO profiles (user_id_profile, birthdate, age, name, lastname, image, gender, created_at) VALUES (4, '1993-01-01', 28, 'Rodri', 'Guina', 'imagen-1611098774970.jpg', 'M', NOW());
INSERT INTO profiles (user_id_profile, birthdate, age, name, lastname, image, gender, created_at) VALUES (5, '1991-01-01', 30, 'Ani', 'Vargas', NULL, 'F', NOW());

-- Tabla payment_methods

INSERT INTO payment_methods (type, cardholder_name, card_number, expiration_date, security_code, profile_id_payment, created_at) VALUES ('Debito', 'ADMIN MICAFE', 1234567891234567, 1212, 123, 1, NOW());

-- Tabla addresses

INSERT INTO addresses (province, city, zip_code, street, number, flat, apartment, profile_id_address, created_at) VALUES ('Buenos Aires', 'CABA', 'B1675', 'Monroe', 860, NULL, NULL, 1, NOW());

-- Tabla categories

INSERT INTO categories (category, created_at) VALUES ('cafe', NOW());
INSERT INTO categories (category, created_at) VALUES ('cafetera', NOW());
INSERT INTO categories (category, created_at) VALUES ('accesorio', NOW());

-- Tabla products

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Café Amalfi', 700, 'AMALFI es un café de Origen Alta Mogiana Paulista, Brasil.\r\n\r\nSus notas sensoriales son Vainilla y Cacao.\r\n\r\nTiene un tueste Medio, una altura de 1000 msnm y un beneficio Natural. \r\n\r\nAmalfi, al igual que todos nuestros cafés, es tostado sin azúcar, apto vegano, gluten free, apto APLV y su proceso está cuidado desde el origen de su fruto hasta que llegue a tu taza.', 'amalfi_mi_cafe.jpg', 1, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Café Dala', 800, 'DALA es un café de Origen Vietnam.\r\n\r\nSus notas sensoriales son Terrosas, Té Negro y Especias.\r\n\r\nTiene un tueste Alto, una altura de 600 msnm y un beneficio Lavado. \r\n\r\nEs un café exótico, con un sabor diferente e intenso.\r\n\r\n\r\nDala, al igual que todos nuestros cafés, es tostado sin azúcar, apto vegano, gluten free, apto APLV y su proceso está cuidado desde el origen de su fruto hasta que llegue a tu taza.', 'dala_mi_cafe.jpg', 1, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Café Iris', 750, 'IRIS es un café de Origen Mogiana, Brasil.\r\n\r\nSus notas sensoriales son Fruta madura y Dulce de leche.\r\n\r\nTiene un tueste Medio/Alto, una altura de 1000 msnm y un beneficio Natural. \r\n\r\n\r\nIris, al igual que todos nuestros cafés, es tostado sin azúcar, apto vegano, gluten free, apto APLV y su proceso está cuidado desde el origen de su fruto hasta que llegue a tu taza.', 'iris_mi_cafe.jpg', 1, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Café Italo', 800, 'ITALO es un café de Origen El Peñol, Colombia.\r\n\r\nSus notas sensoriales son Berries y Jarabe de Maple.\r\n\r\nTiene un tueste Medio, una altura de 2175 msnm y un beneficio Lavado. \r\n\r\n\r\nItalo, al igual que todos nuestros cafés, es tostado sin azúcar, apto vegano, gluten free, apto APLV y su proceso está cuidado desde el origen de su fruto hasta que llegue a tu taza.', 'italo_mi_cafe.jpg', 1, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Café Malta', 750, 'MALTA es un café de Origen Finca Serrinha, Campos Altos - Brasil.\r\n\r\nSus notas sensoriales son Nuez de Macadamia y Miel.\r\n\r\nTiene un tueste Medio/Alto, una altura de 1200 msnm y un beneficio Natural. \r\n\r\nMalta, al igual que todos nuestros cafés, es tostado sin azúcar, apto vegano, gluten free, apto APLV y su proceso está cuidado desde el origen de su fruto hasta que llegue a tu taza.', 'malta_mi_cafe.jpg', 1, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Café Petra', 800, 'PETRA es un café de Origen Huila, Colombia.\r\n\r\nSus notas sensoriales son Frutos rojos, Vainilla y Roble.\r\n\r\nTiene un tueste Medio/Alto, una altura de 1800 msnm y un beneficio Lavado. \r\n\r\nPetra, al igual que todos nuestros cafés, es tostado sin azúcar, apto vegano, gluten free, apto APLV y su proceso está cuidado desde el origen de su fruto hasta que llegue a tu taza.', 'petra_mi_cafe.jpg', 1, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Café Zafiro', 800, 'ZAFIRO es un café de Origen Cerrado Mineiro, Brasil.\r\n\r\nSus notas sensoriales son Manzanilla, Miel y Limón.\r\n\r\nTiene un tueste Medio/alto, una altura de 1200 msnm y un beneficio Natural. \r\n\r\nZafiro, al igual que todos nuestros cafés, es tostado sin azúcar, apto vegano, gluten free, apto APLV y su proceso está cuidado desde el origen de su fruto hasta que llegue a tu taza.', 'zafiro_mi_cafe.jpg', 1, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Cafetera Nespresso Inissia', 11000, 'La Cafetera Express Nespresso Inissia tiene un moderno diseño, que se adapta a todos los estilos de decoración de cocina. Además, es compacta y muy liviana, pesa tan sólo 2,4 kg., por lo que es fácil de ubicar y trasladar. Su estructura es adaptable para dos tamaños de taza: Espresso o Lungo. Además, es eco-friendly ya que está hecha en un 23% de plásticos reciclados. Su depósito de agua tiene una capacidad de 0,7 litros, suficiente para preparar 9 Grands Crus (cápsulas), sin necesidad de volver a cargarla. Y cuenta con modo de calentamiento rápido: una vez encendida la máquina, el agua alcanza la temperatura ideal en tan solo 25 segundos.', 'cafetera_nespresso.jpg', 2, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Cafetera Krups Dolce Gusto', 16500, 'Esta cafetera Krups Mini Me KP123B permite preparar múltiples bebidas, ya sean calientes o frías, desde varios tipos cafés como: café espresso, capuccino, chococino, latte macchiato o una amplia variedad de tés.  Nescafé Dolce Gusto Cápsulas cuenta con 30 tipos de cafés, chocolates y varios tés aromáticos.\r\nLa cafetera Mini Me Dolce Gusto posee un sistema de alta presión de hasta 15 bares, que se adapta según la cápsula para brindar la presión necesaria en cada preparación.\r\n\r\nLa máquina de cafe expresso Dolce Gusto incluye tecnología Play&Select, puedes costumizar la medida de tu taza, para preparar la bebida exactamente a tu gusto.\r\n\r\nEs muy compacta y puedes utilizarla en espacios reducidos.\r\n\r\nEs automática, la cafetera Krups Dolce Gusto se detendrá automáticamente cuando llegue a la cantidad de bebida seleccionada.\r\n\r\nEs muy versátil, te permite preparar deliciosas bebidas frías con gran facilidad.\r\n\r\nPosee el modo ecológico que permite que la cafetera Nescafé Dolce Gusto Mini Me se apague tras 5 minutos de inactividad, de esta forma estará ahorrando energía eléctrica.\r\n', 'cafetera_krups_dolce_gusto.jpg', 2, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Cafetera Bodum', 5000, 'El conjunto para hacer café con hielo BEAN SET utiliza el clásico método de preparación de prensa francesa para preparar un delicioso y sabroso café helado. Para usarlo, coloque granos de café molido grueso en la jarra y añada agua fría. Coloque la prensa francesa BEAN SET en la nevera durante la noche con la tapa de silicona para sellar el sabor y el aroma. Por la mañana, cambie la tapa, presione el émbolo y disfrute.\r\n\r\n• El BEAN SET viene con dos tapas: una para la nevera durante la noche y otra con un émbolo para presionar los posos de café por la mañana\r\n\r\n• Fabricado en plástico, silicona y acero inoxidable\r\n\r\n• Apto para lavavajillas.', 'cafetera_bodum.jpg', 2, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Cafetera Magefesa', 3500, 'Magefesa es uno de los líderes europeos en artículos del hogar y ollas a presión desde que inició su actividad en 1948. En España, es la más importante marca de ollas a presión. Símbolo de alta calidad, seguridad e innovación durante las últimas generaciones, MAGEFESA tiene una presencia comercial en 46 países de los cinco continentes, convirtiéndose en un nombre familiar en muchos países, como Estados Unidos, Canadá, Sudamérica, Europa, Japón, Australia y Nueva Zelanda.', 'cafetera_magefesa.jpg', 2, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Espumador', 400, 'Batidor de café / leche\r\n\r\nBotón de encendido\r\n\r\nDiseño Cómodo y Practico\r\n\r\nResistente y fácil de limpiar\r\n\r\nFunciona para la Elaboración de cualquier tipo de Café, Malteadas, Chocolate, Tragos, Postres y Cremas\r\n\r\nFunciona con 2 pilas AA (no incluidas)\r\n\r\nMedidas: 22 cm de largo x 2.5 cm de diámetro', 'espumador.jpg', 3, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Capsulas Recargables', 900, 'Compatibles con todas las NESPRESSO (a partir del año 2010), incluso los modelos mini.\r\n\r\nRecargá con café TOSTADO, molido para cafetera Express. Vos elegís la procedencia y la calidad de tu café. NO VAN CON CAFÉS TORRADOS.\r\n\r\n¡RECARGÁ, CERRÁ y REUTILIZÁ! (No necesitas materiales extra) Lavalas y volvé a usarlas.\r\n\r\nUna cápsula rinde para hacer un pocillo express (30-40ml). Si querés un lungo, podés usar dos cápsulas.\r\nPodés utilizar más de 100 VECES cada una.\r\n\r\nLa cápsula NO SE PERFORA. Mirá los VIDEOS CAFFETTINO.\r\nYa podés ofrecerle café express a tus invitados, dejalas preparadas en la heladera y ¡listo!', 'capsulas_recargables.jpg', 3, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Molinillo', 4000, 'Con el Molinillo de café Moulinex AR110858 podés conservar todo el aroma de tu café con solo pulsar un botón.\r\n\r\nEmpezá el día con el inigualable aroma del café recién molido. Ligero, fuerte o equilibrado, adaptá el café a tu gusto. Cuchilla y recipiente de acero inoxidable para conservar el sabor de los ingredientes.', 'molinillo.jpg', 3, NOW());

INSERT INTO products (name, price, description, image, category_id, created_at) VALUES ('Taza Mí Café', 600, 'Taza Oficial de Mí Café. \r\n\r\nDisfruta de todas nuestras variedades de cafe con esta taza unica!', 'taza_mi_cafe.jpg', 3, NOW());

-- Tabla attributes

INSERT INTO attributes (name, created_at) VALUES ('weight', NOW());
INSERT INTO attributes (name, created_at) VALUES ('color', NOW());

-- Tabla products_attributes

INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (1, 1, '250', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (2, 1, '500', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (3, 1, '250', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (4, 1, '250', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (5, 1, '500', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (6, 1, '1000', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (7, 1, '500', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (8, 2, 'Rojo', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (9, 2, 'Negro', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (10, 2, 'Varios', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (11, 2, 'Negro', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (12, 2, 'Negro', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (13, 2, 'Negro', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (14, 2, 'Negro', NOW());
INSERT INTO products_attributes (attribute_product_id, attribute_id, value, created_at) VALUES (15, 2, 'Negro', NOW());