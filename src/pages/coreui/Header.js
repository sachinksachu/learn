import React, { useState } from 'react'
import { CHeader, CHeaderBrand, CContainer, CCollapse, CHeaderToggler, CHeaderNav, CNavItem, CNavLink, CDropdown,
    CDropdownToggle, CDropdownItem, CDropdownMenu, CDropdownDivider, CForm, CFormInput, CButton
 } from '@coreui/react'

export default function Header() {
    const [visible, setVisible] = useState(true);
  return (
    
  <>
  <CHeader>
    <CContainer fluid>
      <CHeaderBrand href="#">Header</CHeaderBrand>
      <CHeaderToggler onClick={() => setVisible(!visible)} />
      <CCollapse className="header-collapse" visible={visible}>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#" active>
              Home
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item">
            <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CNavItem>
            <CNavLink href="#" disabled>
              Disabled
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CForm className="d-flex">
          <CFormInput className="me-2" type="search" placeholder="Search" />
          <CButton type="submit" color="success" variant="outline">
            Search
          </CButton>
        </CForm>
      </CCollapse>
    </CContainer>
  </CHeader>
</>
  )
}
