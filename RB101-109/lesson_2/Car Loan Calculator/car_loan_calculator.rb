require 'yaml'
MESSAGES = YAML.load_file("car_loan_calculator_messages.yml")

def sys_clear
  system "clear"
end

def prompt(message)
  puts ">> #{message}"
end

def integer?(number)
  number.to_i.to_s == number
end

def float?(number)
  number.to_f.to_s == number
end

def valid_number?(annual_rate)
  integer?(annual_rate) || float?(annual_rate)
end

def display_welcome
  prompt(MESSAGES["welcome"])
end

def retrieve_loan_amount
  loan_amount = ''
  loop do
    prompt(MESSAGES["ask_loan_amount"])
    loan_amount = gets.chomp
    if valid_number?(loan_amount)
      break
    else
      prompt(MESSAGES["invalid_loan_amount"])
    end
  end
  loan_amount
end

def retrieve_apr
  annual_percentage_rate = ''
  loop do
    prompt(MESSAGES["ask_APR"])
    annual_percentage_rate = gets.chomp
    if valid_number?(annual_percentage_rate)
      break
    else
      prompt(MESSAGES["invalid_APR"])
    end
  end
  annual_percentage_rate
end

def retrieve_duration
  loan_duration = ''
  loop do
    prompt(MESSAGES["ask_loan_duration"])
    loan_duration = gets.chomp
    if integer?(loan_duration)
      break
    else
      prompt(MESSAGES["invalid_loan_duration"])
    end
  end
  loan_duration
end

loop do
  sys_clear
  display_welcome
  prompt("What is the Annual Percentage Rate (APR)")
  prompt(MESSAGES["ask_user_number"])
  prompt(MESSAGES["example_input"])

  annual_percentage_rate = retrieve_apr

  annual_percentage_rate = annual_percentage_rate.to_f
  monthly_rate = annual_percentage_rate / (100 * 12)

  loan_amount = retrieve_loan_amount

  prompt("We need loan duration in months")
  loan_duration = retrieve_duration

  loan_duration = loan_duration.to_f
  loan_amount = loan_amount.to_f
  monthly_payment = loan_amount * (monthly_rate / (1 -
                    (1 + monthly_rate)**(-loan_duration)))
  puts "Your monthly payment is: #{format('%.2f', monthly_payment)}"

  prompt(MESSAGES["calculate_again?"])
  answer = gets.chomp
  if answer.downcase == "y" || answer.downcase == "yes"
    next
  else
    break
  end
end
