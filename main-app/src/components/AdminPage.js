const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
export default function AdminPage(props){
const { navigation } = props;
const pathway_id=navigation.getParam('pathway_id');

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
  );

  
}



