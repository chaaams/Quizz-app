import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View , StyleSheet, ActivityIndicator} from 'react-native';

const shuffleArray = (array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quizz = ({navigation}) =>{
    
    const [questions,setQuestions] = useState();
    const [question,setQuestion] = useState(0);
    const [options,setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false)

    const getQuiz = async ()=>{
        setIsLoading(true);
        const URL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple&encode=url3986';
        const res = await fetch(URL);
        const data = await res.json();
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]));
        setIsLoading(false)

    };
    
    useEffect(()=>{
        getQuiz()
    },[]);

    const handleNextQuestion =()=>{
        setQuestion(question+1)
        setOptions(generateOptionsAndShuffle(questions[question+1]))
    }

    const handlePrevQuestion = ()=>{
        setQuestion(question-1);
        setOptions(generateOptionsAndShuffle(questions[question-1]))
    }
    
    const generateOptionsAndShuffle = (_question)=>{
        const options = [..._question.incorrect_answers];
        options.push(_question.correct_answer);
        shuffleArray(options)

        return options
    }

    const handleSelectedOption = (_option)=>{
        if (_option===questions[question].correct_answer) {
            setScore(score+1)
        }if(question !== 9){
            setQuestion(question+1)
            setOptions(generateOptionsAndShuffle(questions[question+1]))
        }
        console.log(_option===questions[question].correct_answer);
    }

    const handleShowResult = () =>{
        navigation.navigate('Resultat', {
            score: score
        })
    }

    return(
        <View style={styles.container}>
            {isLoading?<View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>:questions&& (
            <View style={styles.parent}>
            <View style={styles.top}>
                <Text style={styles.question}>{decodeURIComponent( questions[question].question)}</Text>
            </View>

            <View style={styles.optionsAnswers}>
                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[0])}>
                    <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[1])}>
                    <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[2])}>
                    <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[3])}>
                    <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={handlePrevQuestion}>PREV</Text>
                </TouchableOpacity>

                {question !==9 && <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>}

                {question ===9 && <TouchableOpacity onPress={handleShowResult} style={styles.button}>
                    <Text style={styles.buttonText}>END</Text>
                </TouchableOpacity>}

                
            </View>
            </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height:'100%',
    },
    top:{
        marginVertical: 16,
    },
    optionsAnswers:{
        marginVertical:16,
        flex:1,
    },
    buttons:{
        marginBottom:12,
        paddingVertical:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button:{
        backgroundColor:'#ef233c',
        padding: 12,
        paddingHorizontal:16,
        borderRadius:16,
        alignItems:'center',
        marginBottom:30,
    },
    buttonText:{
        fontSize:18,
        fontWeight:'600',
        color:'#fff'
    },
    question:{
        fontSize:30,
    },
    option:{
        fontSize:20,
        alignItems:'center',
        textAlign:'center',
        fontWeight:'500',
        color:'#fff'
    },
    optionButton:{
        paddingVertical:12,
        marginVertical:6,
        backgroundColor:'#ef233c',
        paddingHorizontal:12,
        borderRadius:12,
    },
    parent:{
        height:'100%'
    },
    loader:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    }

})
export default Quizz