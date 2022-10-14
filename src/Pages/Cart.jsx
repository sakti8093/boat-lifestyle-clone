import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export const Cart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        onOpen()
    }
    return (
        <>
        <Button
            onClick={() => handleClick()}
            m={4}
            >open</Button>

        <Drawer onClose={onClose}  isOpen={isOpen} size="xs">
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>heading</DrawerHeader>
            <DrawerBody>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consequat nisl vel pretium lectus quam id. Semper quis lectus
                nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                Lectus vestibulum mattis ullamcorper velit.
                </p>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
        </>
    )
}
