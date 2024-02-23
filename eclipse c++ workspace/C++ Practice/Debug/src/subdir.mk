################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../src/C++\ Practice.cpp 

CPP_DEPS += \
./src/C++\ Practice.d 

OBJS += \
./src/C++\ Practice.o 


# Each subdirectory must supply rules for building sources it contributes
src/C++\ Practice.o: ../src/C++\ Practice.cpp src/subdir.mk
	@echo 'Building file: $<'
	@echo 'Invoking: Cygwin C++ Compiler'
	g++ -O0 -g3 -Wall -c -fmessage-length=0 -MMD -MP -MF"src/C++ Practice.d" -MT"$@" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


clean: clean-src

clean-src:
	-$(RM) ./src/C++\ Practice.d ./src/C++\ Practice.o

.PHONY: clean-src

