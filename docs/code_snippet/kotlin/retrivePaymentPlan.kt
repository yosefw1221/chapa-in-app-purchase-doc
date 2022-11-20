// returns users payment plan if user has paid for your app otherwise returns null  
val userPlan = Chapa.getCurrentUserAppPlan()

/**
 * Checks if current user plan is in the given plan list
 *
 * @param plans app plan(s) to be checked in
 * @return true if current user app plan is in the given app plan list or if you pass null it checks user is a premium user of any app plan
*/
val hasAccess = ChapaUtil.isCurrentPlanIn("Premium","Standard")
//val isStandardPlan = ChapaUtil.isCurrentPlanIn("Standard")