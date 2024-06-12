import React, { useState } from "react"; 
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    FlatList, 

} from "react-native"; 

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => { 
    const [task, setTask] = useState(""); 
    const [tasks, setTasks] = useState<string[]>([]); 
    const [editIndex, setEditIndex] = useState(-1); 
    const handleAddTask = () => { 
        if (task) { 
            if (editIndex !== -1) { 
                // Edit existing task 
                const updatedTasks = [...tasks]; 
                updatedTasks[editIndex] = task; 
                setTasks(updatedTasks); 
                setEditIndex(-1); 
            } else { 
                // Add new task 
                setTasks([...tasks, task]); 
            } 
            setTask(""); 
        }
    }; 
  
    const handleEditTask = (index:number) => { 
        const taskToEdit = tasks[index]; 
        setTask(taskToEdit); 
        setEditIndex(index); 
    }; 
  
    const handleDeleteTask = (index:number) => { 
        const updatedTasks = [...tasks]; 
        updatedTasks.splice(index, 1); 
        setTasks(updatedTasks); 
    }; 
  
    const renderItem = ({ item, index }:{item:any,index:any}) => ( 
        <View > 
            <Text 
                >{item}</Text> 
            <View 
                > 
                <TouchableOpacity 
                    onPress={() => handleEditTask(index)}> 
                    <Text 
                        >Edit</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    onPress={() => handleDeleteTask(index)}> 
                    <Text 
                        >Delete</Text> 
                </TouchableOpacity> 
            </View> 
        </View> 
    ); 
  
    return ( 
        <View className="flex-1 justify-center align-middle  bg-red-400"> 
            <Text className="test-2xl font-bold">ToDo App</Text> 
            <TextInput 
                placeholder="Enter task"
                value={task} 
                onChangeText={(text) => setTask(text)} 
            /> 
            <TouchableOpacity 
                
                onPress={handleAddTask}> 
                <Text > 
                    {editIndex !== -1 ? "Update Task" : "Add Task"} 
                </Text> 
            </TouchableOpacity> 
            <FlatList 
                data={tasks} 
                renderItem={renderItem} 
                keyExtractor={(item, index) => index.toString()} 
            /> 
        </View> 
    ); 
}; 
  
/*
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        padding: 40, 
        marginTop: 40, 
    }, 
    title: { 
        fontSize: 24, 
        fontWeight: "bold", 
        marginBottom: 20, 
    }, 
    heading: { 
        fontSize: 30, 
        fontWeight: "bold", 
        marginBottom: 7, 
        color: "green", 
    }, 
    input: { 
        borderWidth: 3, 
        borderColor: "#ccc", 
        padding: 10, 
        marginBottom: 10, 
        borderRadius: 10, 
        fontSize: 18, 
    }, 
    addButton: { 
        backgroundColor: "green", 
        padding: 10, 
        borderRadius: 5, 
        marginBottom: 10, 
    }, 
    addButtonText: { 
        color: "white", 
        fontWeight: "bold", 
        textAlign: "center", 
        fontSize: 18, 
    }, 
    task: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: 15, 
        fontSize: 18, 
    }, 
    itemList: { 
        fontSize: 19, 
    }, 
    taskButtons: { 
        flexDirection: "row", 
    }, 
    editButton: { 
        marginRight: 10, 
        color: "green", 
        fontWeight: "bold", 
        fontSize: 18, 
    }, 
    deleteButton: { 
        color: "red", 
        fontWeight: "bold", 
        fontSize: 18, 
    }, 
}); 
  
*/
export default App;