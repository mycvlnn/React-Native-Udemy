import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Color } from '../../constants/colors'

const ListItem = ({ data }: { data: string[] }) => {
    const renderContent = () => {
        return data.map((item) => <Text key={item} style={styles.itemDetail} >{item}</Text>)
    }

    return <>
        { renderContent()}
    </>

}

export default ListItem

const styles = StyleSheet.create({

    itemDetail: {
        padding: 8,
        borderRadius: 4,
        fontSize: 12,
        backgroundColor: Color.primary,
        width: '100%',
        marginTop: 10,
        textAlign: 'center',
        fontWeight: '500',
        overflow: 'hidden',
        color: Color.primary_100,
    },
})
