import { Col, Divider, Flex, Input, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { RiFilter2Line } from 'react-icons/ri'

import FilterModal from 'components/FilterModal'
import { filterCount } from 'utils/constants'

import './styles.css'

const { Text } = Typography

const Tabs = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <Row justify='start' align='middle'>
      <Col className='search-col'>
        <Input.Search placeholder='Search' className='search-input' />
      </Col>
      <Col className='filter-col'>
        <div className='filter-container' onClick={showModal}>
          <RiFilter2Line className='filter-icon' />
          <span className='filter-text'>Filter</span>
          {filterCount > 0 && <span className='filter-count'>{filterCount}</span>}
        </div>
      </Col>
      <Divider className='tab-divider' />
      <Col className='tab-col'>
        <Flex gap='large'>
          <Col className='company-tab'>
            <Text className='top-headings'>
              Companies
              <span className='companies-people-count'>1408</span>
            </Text>
          </Col>
          <Col>
            <Text className='top-headings'>
              People
              <span className='companies-people-count'>150</span>
            </Text>
          </Col>
        </Flex>
      </Col>
      <Divider className='tab-divider-bottom' />
      <FilterModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        handleChange={handleChange}
      />
    </Row>
  )
}

export default Tabs
