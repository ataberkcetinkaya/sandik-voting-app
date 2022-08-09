import { Button, Center, Container, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import { update, auth } from "../../firebase"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../store/auth/authSlice"


export default function DisplayName(){
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)
    const [displayName, setDisplayName] = useState(user.displayName || user.email)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
   
    const handleSubmit = async e => {
        e.preventDefault()
        await update({
            displayName
        })
        dispatch(login({
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            emailVerified: auth.currentUser.emailVerified,
            uid: auth.currentUser.uid
            }))
    }
    return (
        <form onSubmit={handleSubmit}>
        <Center h='400px'>
          <Container maxW='400px' color='black'>
            <Flex direction="column" alignItems="center">
              <Input border='2px' type='text' value={displayName} placeholder='Kullanıcı Adı' mt={4} mb={4} onChange={e => setDisplayName(e.target.value)} />
              <Button type="submit" disabled={ !displayName } colorScheme='red' size='md'>
               Güncelle
              </Button>
            </Flex>
          </Container>
        </Center>
      </form>
     /* <>
     <Button onClick={onOpen}>Kullanıcı Adı Gir</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent >
            <ModalHeader>Kullanıcı Adını Güncelle</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl  >
                <FormLabel>Kullanıcı Adı</FormLabel>
                <Input  value={displayName} onChange={e => setDisplayName(e.target.value)} ref={initialRef} placeholder='Kullanıcı Adı' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onSubmit={handleSubmit} colorScheme='blue' mr={3}>
                Güncelle
              </Button>
              <Button onClick={onClose}>İptal</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>*/
    )
}