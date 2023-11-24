import { Box, Badge, Button, StyleTypography } from '@/components';
import { StyleListMenuItem } from './StyleListMenuItem';
import { BsBagCheck, AiOutlineHeart } from '@/icons';
import Image from 'next/image';
import { menuItems } from './menuItemsData';

export default function ListMenuItem() {
  return (
    <>
      {menuItems.map((item, index) => (
        <StyleListMenuItem key={index}>
          <Box className="itemMenu">
            <Box className="headerCard">
              <Badge variant="green">New</Badge>

              <Button
                variant="solidYellow"
                size="sm"
                title="Adicionar a os favoritos"
              >
                <AiOutlineHeart size="25" />
              </Button>
            </Box>

            <Box className="imgCard">
              <Image
                src={item.image}
                alt={item.name}
                width={180}
                height={180}
              />
            </Box>

            <Box className="footerCard">
              <Box className="content">
                <StyleTypography tag="h2" size="sm" color="dark">
                  {item.name}
                </StyleTypography>
                <StyleTypography tag="p" size="xs" color="gray">
                  {item.description}
                </StyleTypography>
                <StyleTypography tag="h3" size="sm" color="red">
                  {item.price}
                </StyleTypography>
              </Box>

              <Button
                variant="solid"
                size="sm"
                title="Prosseguir para a compra"
              >
                <BsBagCheck size="25" />
              </Button>
            </Box>
          </Box>
        </StyleListMenuItem>
      ))}
    </>
  );
}
