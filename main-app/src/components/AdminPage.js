/*const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
export default function AdminPage(props){
const { navigation } = props;
const pathway_id=navigation.getParam('pathway_id');
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];
//Page for admin to view graph
    return(
        <>
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
      <Tab.Screen name="Course" component={Courses} initialParams={{pathway_id:pathway_id}} />
        <Tab.Screen name="Roadmap" component={Roadmap} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
    new Chart("myChart", {
        type: "bar",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {...}
      });
  );
    

  
}
*/


