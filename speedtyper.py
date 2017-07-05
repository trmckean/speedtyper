import time

print "Hello and welcome to SpeedTyper!"
ready = False

while not ready:
	userReady = raw_input("Please type 'ready' when you want to begin\n")
	ready = (userReady == 'ready')

test = "Hello, my name is Tyler McKean."

"""Gross WPM Calculation"""
words = len(test)/5

print "Get ready to type in the phrase when it appears in 5 seconds!"

for i in range(5):
	print 5 - i
	time.sleep(1)

startTime = time.time()
userType = raw_input(test + "\n" + "Your input: \n")
endTime = time.time()

elapsedTime = endTime - startTime
elapsedString = "{0:.2f}".format(elapsedTime)
grossWPM = words/(elapsedTime/60)
grossString = "{0:.2f}".format(grossWPM)

"""Calculate Net WPM (Include error rate)"""
errors = sum([int(i!=j) for i, j in zip(test, userType)])
netWPM = grossWPM - (errors/(elapsedTime/60))
netString = "{0:.2f}".format(netWPM)


print "You typed the phrase in {0} seconds at a speed of {1} Gross WPM and {2} Net WPM with {3} uncorrected errors!".format(elapsedString, grossString, netString, errors)
